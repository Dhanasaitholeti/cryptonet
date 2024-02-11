import Navbar from "./components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <Navbar />
      <main className="flex-1 overflow-y-scroll">{children}</main>
    </div>
  );
};

export default RootLayout;
