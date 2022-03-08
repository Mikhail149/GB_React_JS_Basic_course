import Alert from '@mui/material/Alert';

export const Error = ({reload}) => {
    return(
        <div>
            <Alert severity="error">Проблема с интернетом, пожалуйста перезагрузите страницу.</Alert>
            <button onClick={reload}>Перезагрузить</button>
        </div>
    )
}