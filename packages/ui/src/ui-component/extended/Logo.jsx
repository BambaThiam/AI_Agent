import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            {/* <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            /> */}
            <h3>Bamba AI plateform</h3>
        </div>
    )
}

export default Logo
