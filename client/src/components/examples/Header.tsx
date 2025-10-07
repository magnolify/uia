import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="space-y-4">
      <Header isDevMode={true} />
      <Header isDevMode={false} />
    </div>
  );
}
