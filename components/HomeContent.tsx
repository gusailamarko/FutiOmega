const HomeContent = () => {
  return (
    <div className="flex flex-col w-[80%] gap-[3rem] my-[3rem]">
      <div className="flex flex-col items-center gap-[1rem] Schedule">
        <div>
          <h2 className="text-[1.25rem] text-center font-bold uppercase tracking-wider">Változik a nyitvatartásunk</h2>
        </div>
        <div>
          <p>Kedves Ügyfeleink! Az ügyfélszolgálati irodánk 2026. június, július időszakban <b>10-15 óra között tart nyitva.</b> Egyéb időpontokról telefonon, emailen tudunk egyeztetni.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[1rem] Sale">
        <div>
          <h2 className="text-[1.25rem] text-center font-bold uppercase tracking-wider">Akció a Füti Omegában!!!</h2>
        </div>
        <div className="flex flex-col items-center text-center gap-[1rem]">
          <p>Folyamatosan induló <i>Ingatlanközvetítő</i> és <i>Társasházkezelő</i> csoportjainkba <span className="font-bold text-red-700">35% engedménnyel</span> várjuk!</p>
          <p>Távoktatással, vagy személyes részvétellel (budapesti helyszínen), az Önök igénye szerint</p>
          <p>Részletek, jelentkezés a honlapunkon</p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent