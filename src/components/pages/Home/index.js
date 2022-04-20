import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Container } from './styles';
import List from '../../List';





export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function Load() {
      const baseUrl = window.location.href;

      axios.get(`${baseUrl}/data.json`)
        .then((r) => {
          setData(Object.values(r.data));
        })
        .catch(err => alert("Erro na api"));
    }


    Load();
  }, [])


  return (
   <Container>
     <h1>Lista de Arvores</h1>
     <List data={data}/>
   </Container>
  )
}
