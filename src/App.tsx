// 临时调试版本 - 移除所有复杂组件
function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ fontSize: '32px', color: '#2563eb' }}>你好！</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        如果你看到这个，说明 React 正常渲染
      </p>
    </div>
  );
}

export default App;
