import { Alert, Snackbar } from "@mui/material"
import { useAuthContext } from "../../Contexts/AuthContext"


const NotifyCard = () => {
    const { snackbarProps } = useAuthContext()
    return (
        <Snackbar
            open={snackbarProps.open}
            autoHideDuration={snackbarProps.duration ?? 6000}
        >
            <Alert
                onClose={() => window.Snackbar({ open: false })}
                severity={snackbarProps.type}
                sx={{ width: '100%' }}
            >
                {snackbarProps.label}
            </Alert>
        </Snackbar>
    )
}

export default NotifyCard