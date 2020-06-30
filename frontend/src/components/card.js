import React from 'react';


export default function MediaCard(props){


  return (
    <div class="card">
        <h3>{props.name}</h3>
        {props.text.map(frase =>(<p>{frase}</p>))}
        {props.ligacoes.map(ref =>(<p><a href={ref}>{ref}</a></p>))}
    </div>
  );
}