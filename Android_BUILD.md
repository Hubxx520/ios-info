# 📱 Android APK 打包指南（无需 Expo）

本项目使用 **Capacitor** 将 React Web 应用封装成原生 Android APK。

## 🎯 打包流程

### 方式一：Android Studio（推荐 - 可视化）

#### 1. 打开项目

```bash
cd /home/xxiong/ios-info
npx cap open android
```

这会在 Android Studio 中打开项目。

#### 2. 等待 Gradle 同步

首次打开需要几分钟下载依赖。

#### 3. 构建 APK

**方法 A：快速测试 APK**
1. 菜单 `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
2. 等待构建完成
3. APK 位置：`android/app/build/outputs/apk/debug/app-debug.apk`

**方法 B：正式签名 APK**
1. 菜单 `Build` → `Generate Signed Bundle / APK`
2. 选择 `APK`
3. 创建或选择签名密钥
4. 选择 `release` 构建类型
5. 等待完成

---

### 方式二：命令行（快速）

```bash
cd /home/xxiong/ios-info/android

# 构建 Debug APK（测试用）
./gradlew assembleDebug

# 构建 Release APK（需要签名）
./gradlew assembleRelease
```

**APK 位置：**
- Debug: `android/app/build/outputs/apk/debug/app-debug.apk`
- Release: `android/app/build/outputs/apk/release/app-release-unsigned.apk`

---

### 方式三：使用 Android Studio 命令行工具

```bash
# 如果有 ANDROID_HOME 环境变量
$ANDROID_HOME/tools/bin/sdkmanager --licenses
$ANDROID_HOME/tools/bin/avdmanager create avd -n test -p "android-34"

# 然后用 Android Studio 打开
npx cap open android
```

---

## 🔧 配置说明

### capacitor.config.json

```json
{
  "appId": "com.example.iosinfo",
  "appName": "ios-info",
  "webDir": "dist",
  "server": {
    "androidScheme": "https"
  }
}
```

- **appId**: 应用包名（上架用，可改为你的域名反写）
- **appName**: 应用名称
- **webDir**: Web 构建输出目录

---

## 📦 更新应用流程

每次修改代码后：

```bash
# 1. 重新构建 Web 项目
npm run build

# 2. 同步到 Android
npx cap sync android

# 3. 重新打开 Android Studio（可选）
npx cap open android

# 4. 在 Android Studio 中重新构建 APK
```

---

## 📱 安装测试

### 真机安装

```bash
# 通过 ADB 安装（需要 USB 调试）
adb install android/app/build/outputs/apk/debug/app-debug.apk

# 或直接传输 APK 文件到手机手动安装
```

### 模拟器安装

在 Android Studio 中：
1. 创建虚拟设备（AVD）
2. 点击运行按钮（绿色三角形）
3. 应用自动安装并启动

---

## 🔑 签名配置（发布用）

### 创建签名密钥

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-app-alias -keyalg RSA -keysize 2048 -validity 10000
```

### 配置 android/app/build.gradle

编辑 `android/app/build.gradle`：

```groovy
android {
    ...
    signingConfigs {
        release {
            storeFile file("my-release-key.keystore")
            storePassword "你的密钥库密码"
            keyAlias "my-app-alias"
            keyPassword "你的密钥密码"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

---

## ⚠️ 常见问题

### 1. Gradle 同步失败

**解决方案：**
```bash
cd android
./gradlew clean
./gradlew build
```

### 2. SDK 版本不匹配

编辑 `android/app/build.gradle`，确保：
```groovy
compileSdkVersion 34
targetSdkVersion 34
```

### 3. 没有安装 Android Studio

**下载：** https://developer.android.com/studio

或者使用纯命令行：
```bash
# 安装命令行工具
sdkmanager "platform-tools" "platforms;android-34"

# 然后构建
cd android
./gradlew assembleDebug
```

---

## 📊 APK 大小优化

生成的 APK 可能较大（10-30MB），优化方法：

### 1. 压缩图片资源
```bash
# 安装 android 目录后
cd android/app/src/main/res
# 使用在线工具压缩所有图片
```

### 2. 启用 ProGuard

编辑 `android/app/build.gradle`：
```groovy
buildTypes {
    release {
        minifyEnabled true
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
}
```

---

## 🎯 快速命令总结

```bash
# 开发流程
npm run build          # 构建 Web
npx cap sync android   # 同步到 Android
npx cap open android   # 打开 Android Studio

# 命令行构建
cd android
./gradlew assembleDebug

# 安装到设备
adb install app/build/outputs/apk/debug/app-debug.apk
```

---

## ✅ 优势对比

| 特性 | Capacitor | Expo |
|------|-----------|------|
| 需要账号 | ❌ 不需要 | ✅ 需要 |
| APK 直接获取 | ✅ 是 | ✅ 是（云端） |
| 代码修改 | Web 技术 | React Native |
| 热重载 | ✅ 支持 | ✅ 支持 |
| 原生 API | ✅ 通过插件 | ✅ 完整支持 |
| 打包速度 | 快（本地） | 慢（云端） |

---

现在你的应用已经完全就绪，可以直接打包成 APK 了！