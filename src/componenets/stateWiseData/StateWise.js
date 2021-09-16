import React, {useState,useEffect} from 'react';
import './StateWise.css';

const StateWise = () =>{
    const [data, setData] = useState([]);
    const getCovidData = async () =>{
        const res = await fetch('https://data.covid19india.org/data.json').catch(error => console.log(error));
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
       getCovidData();
    }, []);
    return(
        <>
            
            <div className = "container-fluid mt-5">
                <div className = "main-heading">
                    <h1 className = "mb-5 text-center"><span className = "font-weight-bold">INDIA</span> Covid-19 Dashboard</h1>
                </div>
                <div className = "table-responsive">
                    <table className = "table table-hover">
                        <thead className = "thead-dark">
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((curElem,index)=>{
                                return(
                                    <tr key = {index}>
                                        <th>{curElem.state}</th>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.lastupdatedtimecd}</td>
                                     </tr>
                                );
                            })}
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
}

export default StateWise;