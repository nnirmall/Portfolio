import Nav from "../ui/Landing/nav";

import '@/app/ui/Landing/nav.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div className="nav">    
        <Nav />
      </div>
      <div className="">{children}</div>
    </div>
    
    
  );
}