export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}