import React, {useEffect, useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [plan, setPlan] = useState([])
  const [search, setSearch] = useState('')

  const request = async () => {
    let req = await fetch('http://localhost:8003/planeteers')
    let res = await req.json()
    setPlan(res)
  }
  // console.log(plan)
  useEffect(request, [])

  const searched = plan.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer searched={searched} />
    </div>
  );
}

export default App;
