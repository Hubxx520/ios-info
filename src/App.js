import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
function App() {
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(ProjectsSection, {}), _jsx(ContactSection, {})] }), _jsx(Footer, {})] }) }));
}
export default App;
