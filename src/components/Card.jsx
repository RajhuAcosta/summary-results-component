const Card = ({title,value,color}) => {
  return (
    <div className="flex justify-between px-4 py-3 rounded-lg 1.5xl:w-[260px]" style={{backgroundColor: `${color},0.1)`}}>
      <div className="flex gap-3 items-center">
        <i><img src={`/icon-${title}.svg`} alt="" /></i>
        <h4 className="capitalize" style={{color: `${color},1)`}}>{title}</h4>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[hsl(224,30%,27%)] font-extrabold">{value}</p>
        <span className="text-[hsla(224,30%,27%,0.7)]">/ 100</span>
      </div>
    </div>
  )
}
export default Card