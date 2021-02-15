import React from 'react';

const Controls = ({maxBet, handleBet, handleCallAndCheck, handleFold}) => (
  <div>
    ACTION IS ON YOU
    <form>
      <label>
      RAISE AMOUNT
      <input type="number" id="raiseAmount" name="bet" min="10" max={`"${maxBet}"`} />
      </label>
      <input type="submit" value="Bet" required/>
      </form>
    <button onClick={(e)=>{handleCallAndCheck(e)}}>CALL/CHECK</button>
    <button onClick={(e)=>{handleFold(e)}}>FOLD</button>
  </div>
)

export default Controls;