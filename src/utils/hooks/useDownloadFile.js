import DownloadFile from '../downloadFile';
import store from '../../store/userstore.js';

const useDownloadFile = () => {
    return (fileId, fileName, typeId) => DownloadFile(fileId, fileName, store, typeId)
}

export default useDownloadFile;