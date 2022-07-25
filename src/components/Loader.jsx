import { BallTriangle } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className="grid content-center justify-center w-full h-screen">
        <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Loader