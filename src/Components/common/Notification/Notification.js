import './Notification.css';
import { useNotificationContext } from '../../../contexts/NotificationContext';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    // className={notification.type} 

    return (
        <div className="notification" >
            <button className="closeSign" onClick={hideNotification} >x</button>
            <body className="center">
                {/* {notification.message} */}
                You are not authorised!
            </body>
        </div>
    )
}

export default Notification;