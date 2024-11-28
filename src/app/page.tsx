import createKey from "@/app/services/key-generator";

export default function Home() {
  return (
      <div className={'flex flex-wrap'}>
        {new Array(92).fill(1).map((key,index)=>{
          return <div key={createKey()} className={'flex'}>
            <img className="w-[100px]" src={`/img/cards/${index+1}.png`}/>
          </div>
        })}
    </div>
  );
}
