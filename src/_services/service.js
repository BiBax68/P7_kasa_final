import JsonLogement from '@/Assets/Api/logement.json';

let GetAllLogement = () => {
    return JsonLogement;
}

let GetLogement = async (id) => {
    const logement = await JsonLogement.find(logement => logement.id === id);
    return logement

}

export const ServiceLogement = {
    GetAllLogement,
    GetLogement
}

export default ServiceLogement