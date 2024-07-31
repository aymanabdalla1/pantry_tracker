'use client';

import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import Image from 'next/image'
import {firestore} from '../firebase'





const items = [
  'tomato',
  'potato',
  'onion',
  'carrot',
  'apple',
  'banana',
  'orange',
  'milk',
  'bread',
  'butter',
]

export default function Home() {
  const [Inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');

  const updateInventory = async () => {
    const snapshot = query(collection(firebase, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name:doc.id,
        ...doc.data()
      })
    })
    setInventory(inventoryList)
  }

  useEffect(() => {
    updateInventory()
  }, [])

  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box border={'1px solid #333'}>
      <Box width='800px' height='100px' bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h2'} color={'#333'} textAlign={'center'}> Inventory Management </Typography>
      </Box>
      <Stack width="800px" height="500px" spacing={2} overflow={'auto'}>
        {items.map((i) => (
          <Box
            key={i}
            width="100%"
            height="100%"
            bgcolor={'#f0f0f0'}
            display={'flex'}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"h3"}
              color={'#333'}
              textAlign={"center"}
              >
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
    </Box>
  );
}
