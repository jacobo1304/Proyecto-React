import AppLayout from '../../components/AppLayout'
import ContenidoInicio from '../../components/ContenidoInicio'

export default function Inicio() {
  return (
    <AppLayout 
      showSearchHeader={true}
      footerCurrent="home"
    >
      <ContenidoInicio />
    </AppLayout>
  )
}
