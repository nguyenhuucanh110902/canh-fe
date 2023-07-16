import { notification } from "antd";


class ToastService {
    error(message, description = '') {
        notification.error({
            message,
            description,
          });       
    }

    success(message, description = '') {
        notification.success({
            message,
            description,
          });      
    }

    info(message, description = '') {
        notification.info({
            message,
            description,
          });      
    }

}

export default new ToastService();