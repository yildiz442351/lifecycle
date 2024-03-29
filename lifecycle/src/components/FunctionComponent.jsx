import { useEffect, useState } from "react";
import CustomButton from "./CustomButton/CustomButton";

import Row from './Row/Row'
const Counter = () => {
    //State Tanımlama
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0)

    /**Fonksiyon Componentlerde Componenti Yaşamını izlemek için useEfect () Kullanılır
     * *Yazım Şekilleri
     1-useEffect(()=>{},[])
     2-useEffect (()=>{})
     3-useEffect(()=>{},[state])
     4-useEffect(()=>{return()=>{}},[])

     **Kullanımları

     1-Bileşen ekrana ilk geldiği anda çalışır
     *Kullanım amacı:API istekleri, bileşen render kontorlu, veri tabanı istekleri gibi

     2-Bileşen her güncellendiğinde çalışır
     *anlık güncellenen verilere göre durum değişeceği zaman

     3-Bileşendeki belirli bir durumda değişiklik olması halinde çalışır
     *instagramda post beğenildiğinde beğeni sayısının artırılması gibi

     4-Bileşen ekrandan gittiği anda çalışır
     *



     */

    //Bileşenin ekrana ilk basıldığı anı yakalamak için
    //componentDidMount metodunun karşılığı

    useEffect(() => {

        console.log('Fonksiyon Component Ekrana Basıldı');
    }, [])

    //Bileşende her değişiklik olduğu anı yakalamak için

    useEffect(() => {
        console.log('Bileşen Güncellendi', count)
    })

    //Çalışmak için page statini dikkate alır
    useEffect(() => {
        console.log('Sayfa değişti', page)
    }, [page])

    useEffect(() => {
        return () => {
            console.log("Fonksiyon Component ekrandan gitti")
        }
    }, []);
    <div>
        <Row style={{ width: '200px' }}>
            <CustomButton buttonTitle={"Arttır"} onClick={() => setCount(count + 1} />
            <p>{count}</p>
            {count >= 0 && (
                <CustomButton buttonTitle={"Azalt"} onClick={() => setCount(count - 1)} />
            )}
        </Row>
        <div>
            <p>Şuan{page}. Sayfadasınız</p>
            <button onClick={() => setPage(page + 1)}>Sayfayı Değiştir</button>
        </div>
    </div>
    )
}

export default Counter;