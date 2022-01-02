import './Notification.css';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

 
    return (
        <div className={["notification", notification.type].join(' ')}>
            <button className="closeSign" onClick={hideNotification} >x</button>
            <p className="center" >
                {notification.message}
                {/* You are not authorised! */}
            </p>
        </div>
    )
}

export default Notification;