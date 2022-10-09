import React,{useState, useEffect} from 'react';
import styles from "../styles/Transpose.module.css";
import data from './Data';


const Transpose = () => {
        // Transpose function
        const [value, setValue] = useState();
        // const [code, setCode] = useState([]);
             
        console.log(value);
        console.log(data[1].key)
        // useEffect(()=>{
        //   setCode(data)

        // })
       
        const buttonClick = (index) => {
          setValue(index);
        };
        
    return (

        <>
            <div className={styles.transpose_box}>
                <div className={styles.transpose}>
                    {/* <button className={styles.transpose_Btn} onClick={buttonClick1} value="0">C</button> */}
                    <button className={value === 1 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(1)} value="1">C</button>
                    <button className={value === 2 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(2)} value="2">C#</button>
                    <button className={value === 3 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(3)} value="3">Db</button>
                    <button className={value === 4 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(4)} value="4">D</button>
                    <button className={value === 5 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(5)} value="5">D#</button>
                    <button className={value === 6 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(6)} value="6">Eb</button>
                    <button className={value === 7 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(7)} value="7">E</button>
                    <button className={value === 8 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(8)} value="8">F</button>
                    <button className={value === 9 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(9)} value="9">F#</button>
                    <button className={value === 10 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(10)} value="10">Gb</button>
                    <button className={value === 11 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(11)} value="11">G</button>
                    <button className={value === 12 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(12)} value="12">G#</button>
                    <button className={value === 13 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(13)} value="13">Ab</button>
                    <button className={value === 14 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(14)} value="14">A</button>
                    <button className={value === 15 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(15)} value="15">A#</button>
                    <button className={value === 16 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(16)} value="16">Bb</button>
                    <button className={value === 17 ? `${styles.transpose_Btn} ${styles.transpose_active}`: `${styles.transpose_Btn}`} onClick={()=>buttonClick(17)} value="17">B</button>
                </div>
            </div>
            <br/>
            <br/>
            <h2>Papa | Lyrics |Bridge Music ft. Prince Mulla, Zayvan Sam Alex Pasula</h2>
                    <p>Key:{data[1].vi}</p>
                    <br/>
                    <p className={styles.p}>
                    <pre>

                        INTRO: C#/ G#/C / A#m // A#m / F#/ C#// (x 2)
                        <br/>                   
                        <br/>                    
                        VERSE 1:
                        <br/>                    
                        {/* C#			G#/C 		      A#m */}
                        <br/>                    
                        {data[1].vii}         {data[1].v}  {data[1].ii}<br /> 
                        Tujhe chhod mein chal pada
                        <br/>                    
                        A#m 		F#		C#
                        <br/>                    
                        Dhundne ghar har jagah
                        <br/>                    
                        C#		G#/C 		A#m
                        <br/>                    
                        Khoj me mein kho gaya
                        <br/>                    
                        A#m 		F#		    C#
                        <br/>                    
                        Khud ko pehchan na saka
                        <br/>                    
                        <br/>                 
                        PRE-CHORUS 1:
                        <br/>                    
                        	F#		     G#		    G#sus    C#
                        <br/>                    
                        Rehamat ke dariya mein dubaya mujhe
                        <br/>                   
                        		F#		G#		Fm 	A#m
                        <br/>                    
                        Uss se zariya banakar chalaya mujhe (x 2)
                                            
                        <br/>
                        <br/>                   
                        CHORUS:
                        <br/>                
                        A#m    Fm
                        <br/>                
                        Papa, Papa
                        <br/>                
                        F#			G#
                        <br/>                
                        Beta mein Tera ( x 2)
                                            
                        <br/>
                        <br/>               
                        INTRO: C#/// G#/// F#/// G#(x 2)
                        <br/>                  
                        <br/>                    
                        VERSE 2:
                        <br/>                    
                        		C#		      G#/C    A#m
                        <br/>                    
                        Tujhe chhod mein jau kaha
                        <br/>                    
                        A#m 	  F#			C#
                        <br/>                    
                        Tu hi toh ghar hai mera
                        <br/>                    
                        C#		G#/C 	   A#m
                        <br/>                    
                        Na tha mujhe ye pata
                        <br/>                    
                        A#m 	     F# 	    C#
                                            
                        Beta mein tha hi Tera
                                            
                        <br/>   
                        <br/>                 
                        PRE-CHORUS 2:
                        <br/>                    
                        	F#	G#	   G#sus    C#
                        <br/>                    
                        Nazar Teri kabhi na hati
                        <br/>                    
                        	F#	    G#	     Fm 		  A#m
                        <br/>                    
                        Mehfooz hoon Teri parchhai mein
                        <br/>                    
                        	F#	G#	  G#sus    C#
                        <br/>                    
                        Nazar Teri kabhi na hati
                        <br/>                    
                        	F#	     G#	G#/C		A#m
                        <br/>
                        Mehfooz hoon Teri parchhai mein             
                        <br/>
                        <br/>                   
                        CHORUS
                        <br/>
                        <br/>                  
                        TAG:
                        <br/>                    
                        	D#m 		G#			C#
                        <br/>                    
                        Teri aankhon ki putli hoon Papa
                        <br/>                    
                        A#m 	D#m 	    G#		    C#    A#m
                        <br/>                    
                        Mein - aankhon ki putli hoon Papa
                        <br/>                    
                        	    D#m	       G#			C#/F   A#m
                        <br/>                    
                        Teri aankhon ki putli hoon Papa
                        <br/>                    
                        	    D#m	       G#			C#/
                        <br/>                    
                        Teri aankhon ki putli hoon Papa                
                        <br/>
                        <br/>                    
                        BRIDGE:
                        <br/>                    
                        C#							D#m
                        <br/>                    
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>                    
                        C#					D#m
                        <br/>                    
                        Sharmindagi se - Nikaala hai Tu ne (x 2)
                        <br/>                     
                        C#						C#				C#/F	Fm
                        <br/> 
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>                    
                        C#							C#
                        <br/>                
                        Paraya na hoon mein - Thukraya na Tu ne
                        <br/>                
                        C#/ F				 G#				(C#/F – A#m)
                        <br/>                
                        Sharmindagi se - Nikaala hai Tu ne
                        <br/>                
                        D#m			 C#/F
                        <br/>
                        	Gale lagakar chooma mujhe
                        <br/>                    
                        	     F# 			G#
                        <br/>                
                        Mera latta hatakar labada diya (x 2)
                        <br/>
                        <br/>                
                        CHORUS 
                        <br/>
                        <br/>                
                        TAG
                        </pre>

                    </p>
        </>
    )
}

export default Transpose