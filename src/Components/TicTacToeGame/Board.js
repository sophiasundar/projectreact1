import GameBox from "./GameBox"

const Board =({boardVal,setBoardVal}) =>{
  const [isXturn,setIsXturn]=useState(true)
  const handleclick=(index)=>{
    console.log(index)

    const boardValCopy=[...boardVal]
    console.log(boardValCopy)

    if(boardValCopy[index]==null){
        boardValCopy[index]=isXturn?'x':'o'
        console.log(boardValCopy)
        setBoardVal(boardValCopy)
        setIsXturn(!isXturn)
    }
  } 

    return(
        <>
        <div className="board">
            {
                boardVal.map((element,index)=>{
                    return <GameBox element={element}></GameBox>
                })
            }
        </div>
        </>
    )
}
export default Board;