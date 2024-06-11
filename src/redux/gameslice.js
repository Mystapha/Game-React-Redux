import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 gamelist:[
        {id:Math.random(),
        name:"Evil Dead",
        description:"The Game - Game of the Year Edition",
        img:"https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGameGameoftheYearEdition_SaberInteractiveInc_Bundles_S2_1200x1600-ee2e0433ade04521ffd4dbd4c7d97135?h=480&quality=medium&resize=1&w=360"
        },
        {id:Math.random(),
        name:"GTA",
        description:"The Game - Game of the Year Edition",
        img:"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"
        },
        {id:Math.random(),
        name:"Formula 1",
        description:"The Game - Game of the Year Edition",
        img:"https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2021-Master-Folder/F1%202021%20LAUNCH%20RENDERING%20(2).jpg"
        },
        {id:Math.random(),
        name:"FIFA Football",
        description:"The Game - Game of the Year Edition",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCA-S_SXXDvrCmux5tK6ggyIJc2EJJy_IF4A&s"
        },
        {id:Math.random(),
          name:"DrangonBall",
          description:"The Game - Game of the Year Edition",
          img:"https://www.pngall.com/wp-content/uploads/12/Dragon-Ball-Z-PNG-Clipart.png"
          },
          {id:Math.random(),
            name:"ZORO Game",
            description:"The Game - Game of the Year Edition",
            img:"https://w0.peakpx.com/wallpaper/245/458/HD-wallpaper-zoro-roronoa-1920-1440-png-transparent-background-zoro.jpg"
            },
           
 ]
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addgame: (state, action) => {
      state.gamelist.push(action.payload);
    },
    removegame: (state, action) => {
      state.gamelist=state.gamelist.filter((el)=>el.id!==action.payload.id);
    },
    editgame: (state, action) => {
      let i=state.gamelist.findIndex((el)=>el.id===action.payload.id);
      state.gamelist[i]=action.payload.edited;
    },
    
  },
});


export const {addgame,removegame,editgame} = gameSlice.actions

export default gameSlice.reducer