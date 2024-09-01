
const RoomPage = ({setIsAuth, setRoom}) => {
    // Çıkış yap butonuna tıklanınca
    const logout =()=>{
        //Yetkiyi false'a çek 
        setIsAuth(false)
        //Local'i temizle sayfa yenilendiğinde tekrar aynı yerde kalmamak için ekleriz
        localStorage.removeItem("token")
    }
    //Form gönderilince
    const handleSubmit =(e)=>{
        e.preventDefault()
        const room = e.target[0].value.trim().toLowerCase()
        console.log(room)
        setRoom(room)
    }

  return (
    <form onSubmit={handleSubmit} className='room-page'>
      <h1>Chat Odası</h1>

      <p>Hangi Odaya Gireceksiniz</p>
      <input type="text" placeholder='örn:haftaiçi' />

      <button type='submit'>Odaya Gir</button>
      <button onClick={logout} type='button' >Çıkış Yap</button>
    </form>
  )
}

export default RoomPage