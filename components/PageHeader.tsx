export default function PageHeader(props: any) {
  return (
    <div id={"pageHeader_" + props.header} className={`
      w-full text-center
      min-h-[10em] pt-12
      bg-[#232741] text-white
      print:hidden
    `}>
      <span className="pageHeaderLabel text-6xl font-header-serif select-none">{props.header}</span>
    </div>
  );
}
