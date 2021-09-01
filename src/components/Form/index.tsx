import { useCallback, useState } from 'react'
import { addTodo } from '../../redux/features/todos'
import { useAppDispatch } from '../../redux/hooks'

const Form = () => {
  const dispatch = useAppDispatch()

  const [text, setText] = useState<string>('')

  const handleAdd = useCallback(() => {
    console.log(text)
    dispatch(addTodo(text))
    setText('')
  }, [text])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={() => handleAdd()}>
        Adicionar
      </button>
    </div>
  )
}

export default Form