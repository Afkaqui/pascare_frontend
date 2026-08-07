import './intranet.css';

export const metadata = {
  title: 'Intranet',
  // Uso interno: no debe indexarse ni seguirse.
  robots: { index: false, follow: false, nocache: true },
};

export default function IntranetLayout({ children }) {
  return <div className="intranet-root">{children}</div>;
}
