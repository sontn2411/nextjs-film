import Header from './Header'

interface Props {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='min-h-screen flex  pt-10 justify-center'>{children}</div>
    </div>
  )
}

export default LayoutWrapper
