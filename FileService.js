import * as uuid from 'uuid';
import *as path from 'path';

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + `.${file.name.split('.').pop()}`;
            const filePath = path.resolve('static', fileName)
            file.mv(filePath);
            return fileName;
        }
        catch (e){
            console.log(e)
        }
    }
}
export default new FileService();