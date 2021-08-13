import data from '../data/PlayerData'
import { useState } from 'react';
import './PlayerCard.css';

const SearchTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return ( 
    <div className="contain pt-20">
      <input 
      type="text" 
      placeholder="Search players..." 
      className="form-control search" 
      style={{ width: "50%" }}
      onChange= {(e) => {
        setSearchTerm(e.target.value);
      }}
      />

      
        <div className="cardz pt-8">
          {data.filter(val=> {
            if (searchTerm === ''){
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ){
              return val;
            }
          }).map(m=> (
      
      <a href={m.url} target="{{_blank}}"><div className="card" style={{width: "18rem" }} key={m.id}>
        <div className="card-inner">
          <div className="card-front">
            <h1>{m.name}</h1>
            <img src={m.imgPath} alt=""></img>
          </div>
          <div className="card-back">
            <h1>{m.name}</h1>
            <ul>
              <li>
                <strong>Team:</strong> {m.currentTeam}
              </li>
              <li>
                <strong>Height:</strong> {m.height}
              </li>
              <li>
                <strong>Age:</strong> {m.age}
              </li>
              <li>
                <strong>Career Points:</strong> {m.CareerPoints}
              </li>
              <li>
                <strong>Career Assists:</strong> {m.CareerAssists}
              </li>
              <li>
                <strong>Career Rebounds:</strong> {m.CareerRebounds}
              </li>
              <li>
                <strong>Championships:</strong> {m.Championships}
              </li>
              <li>
                <strong>Total Seasons:</strong> {m.TotalSeasons}
              </li>
            </ul>
          </div>
        </div>
       </div></a>
      ))}
      </div>
      </div>
   );
   
}
 
export default SearchTable;

// sfc