import React from 'react'
import { useState, useEffect } from 'react'
import  styles from "../styles/SongMain.module.css"
import Transpose from './Transpose';
import data from './Data';


const SongMain = () => {
    const[toggleState, setToggleState]= useState(1);
    const toggleTab =(index)=>{
        setToggleState(index);
    }

  return (
    <>
        <div className={styles.master}>
        <div className={styles.tab_container}>
            <div className={styles.content}>
                <div className={styles.song_title}>
                    <h1 className={styles.h1}>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h1>
                </div>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <iframe className='iframe' width="100%" height="200" src="https://www.youtube.com/embed/M_tbpTCd4Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

                    </div>
                        <br/>
                        <br/>          
                    <div className={styles.right}>
                        <h3>
                            Worship Leaders - Prince Mulla, Zayvan & Sam AlexPasula 
                            <br/>
                            <br/>
                            Backing Vocals - Natalia Kashyap, Prakruthi Angelina,Rachel Francis, Philemon Anand & Rohan Mane 
                            <br/>
                            <br/>
                            Acoustic Guitars - Sabi T & Joel Udai 
                        </h3>
                       
                    </div>
                </div>
                {/* active-button */}
                <div className={styles.control}>
                    <button 
                        // className={toggleState ===1 ? "lyrics active_button" : "lyrics button"}
                        className={toggleState ===1 ? `${styles.chords} ${styles.active_button}` : `${styles.lyrics} ${styles.button}`}

                        onClick={()=> toggleTab(1)}    
                        >Chords
                    </button>
                    <button 
                        className={toggleState ===2 ? `${styles.lyrics} ${styles.active_button}` : `${styles.lyrics} ${styles.button}`}

                        onClick={()=> toggleTab(2)}
                        >Lyrics
                    </button>
                    <button 
                        className={toggleState ===3 ? `${styles.hindi} ${styles.active_button}` : `${styles.hindi} ${styles.button}`}

                        onClick={()=> toggleTab(3)}
                        >Hindi
                    </button>
                </div>

                {/* <div className={toggleState ===1 ? "box1 active" : "box1"}> */}
                <div className={toggleState ===1 ? `${styles.box1} ${styles.active}` : `${styles.box1}`}>
                    <br/>
                    <Transpose/>

                        
                    <br/>
                    <br/>
                    
                </div>
                {/* <div className={toggleState ===2 ? "box2 active" : "box2"}> */}
                <div className={toggleState ===2 ? `${styles.box2} ${styles.active}` : `${styles.box2}`}>
 
                    <h2>
                        Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula
                    </h2>
                    
                    <p className={styles.p}>
                        
                        INTRO: 
                        <br/>
                        <br/>
                        VERSE 1:
                        <br/>
                        Tujhe chhod mein chal pada
                        <br/>
                        Dhundne ghar har jagah
                        <br/>
                        Khoj me mein kho gaya
                        <br/>
                        Khud ko pehchan na saka
                        <br/>
                        <br/>
                        PRE-CHORUS 1:
                        <br/>
                        Rehamat ke dariya mein dubaya mujhe
                        <br/>
                        Uss se zariya banakar chalaya mujhe (x 2)
                        <br/>
                        <br/>
                        CHORUS:
                        <br/>
                        Papa, Papa
                        <br/>
                        Beta mein Tera ( x 2)
                        <br/>
                        <br/>
                        INTRO: 
                        <br/>
                        <br/>
                        VERSE 2:
                        
                        <br/>
                        Tujhe chhod mein jau kaha
                        <br/>
                        Tu hi toh ghar hai mera
                        <br/>
                        Na tha mujhe ye pata
                        <br/>
                        Beta mein tha hi Tera
                        <br/>
                        <br/>
                        PRE-CHORUS 2:
                        <br/>
                        Nazar Teri kabhi na hati
                        <br/>
                        Mehfooz hoon Teri parchhai mein
                        <br/>
                        Nazar Teri kabhi na hati
                        <br/>
                        Mehfooz hoon Teri parchhai mein
                        
                        <br/>
                        <br/>
                        CHORUS
                        <br/>
                        <br/>
                        TAG:
                        
                        <br/>
                        Teri aankhon ki putli hoon Papa
                        <br/>
                        Mein - aankhon ki putli hoon Papa
                        <br/>
                        Teri aankhon ki putli hoon Papa
                        <br/>
                        Teri aankhon ki putli hoon Papa
                        <br/>
                        <br/>
                        BRIDGE:
                        <br/>
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>
                        Sharmindagi se - Nikaala hai Tu ne (x 2)
                        
                        <br/>
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>
                        Sharmindagi se - Nikaala hai Tu ne
                        <br/>
                            Gale lagakar chooma mujhe
                        <br/>
                        Mera latta hatakar labada diya (x 2)
          
                    </p>
                </div>
                {/* <div className={toggleState ===3 ? "box3 active" : "box3"}> */}
                <div className={toggleState ===3 ? `${styles.box3} ${styles.active}` : `${styles.box3}`}>

                    <h2>
                        Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula
                    </h2>
                    <p className={styles.p}> 
                        <br/> 
                        तुझे छोड़ मैं चल पड़ा
                        <br/> 
                        ढूंढने घर हर जगह
                        <br/> 
                        खोज में मैं खो गया
                        <br/> 
                        खुद को पहचान ना सका

                        <br/>
                        <br/>
                        Pre-chorus 1:
                        <br/>
                        रहमत के दरिया में डुबाया मुझे,
                        <br/>
                        उस से ज़रिया बनाकर चलाया मुझे

                        <br/>
                        <br/>
                        Chorus:

                        <br/>
                        पापा, पापा
                        <br/>
                        बेटा, मैं
                        <br/>
                        <br/>
                        VERSE 2:

                        <br/>
                        तुझे छोड़ मैं जाऊं कहाँ
                        <br/>
                        ना था मुझे ये पता,
                        <br/>
                        बेटा मैं था ही तेरा
                        <br/>
                        <br/>
                        Pre-chorus 2:
                        <br/>
                        नजर तेरी कभी ना हटी,
                        <br/>
                        महफ़ूज़ हूँ तेरी परछाईं में
                        <br/>
                        <br/>
                        chorus:

                        <br/>
                        पापा, पापा
                        <br/>
                        बेटा, मैं
                        <br/>
                        <br/>
                        Tag:
                        <br/>
                        तेरी आँखों की पुतली हूँ पापा
                        <br/>
                        मैं – आँखों की पुतली हूँ पापा
                        <br/>
                        तेरी आँखों की पुतली हूँ पापा
                        <br/>
                        <br/>
                        BRIDGE:
                        <br/>
                        पराया ना हूँ मैं – ठुकरा ना तू ने
                        <br/>

                        शर्मिंदगी से- निकाला हैं तू ने
                        <br/>

                        गले लगाकर चूमा मुझे
                        <br/>

                        मेरा लटटा हटाकर लबादा दिया
                 
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SongMain