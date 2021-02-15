export default function usePatron(patron) {

    const perfil = (patron) => {
        switch (patron) {
            case 'dominancia':
                return {
                    color:'#FC004B',
                    label: 'Independiente Automotivado'
                }
            case 'control':
                return {
                    color:'#3002AF',
                    label: 'Analista Pensador'
                }
            case 'influencia':
                return {
                    color:'#FFCC00',
                    label: 'Promotor Amigable'
                }
            case 'estabilidad':
                return {
                    color:'#04E120',
                    label: 'Planificador Perseverante'
                }
            default:
                return {color:'transparent', label: ''}
        }
    }

    return perfil( patron )
}
