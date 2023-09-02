import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'


export default class AtividadesController {
  public async index({}: HttpContextContract) {
    const list = await Atividade.all()
    
    return list
  }

  public async create({}: HttpContextContract) {
    
  }

  public async store({request}: HttpContextContract) {
    const data = request.only(["nome","descricao","data", "local", "tipo","livre" ])
    const ativi = await Atividade.create(data)
    return ativi
  

  }

  public async show({params}: HttpContextContract) {
    const atividadeId = Number(params.id)
    const atividade = await Atividade.findOrFail(atividadeId)
      return atividade
  }
  public async edit({}: HttpContextContract) {}

  public async update({request,params}: HttpContextContract) {
    const data = request.only(["nome","descricao","data", "local", "tipo","livre" ])
    const atividadeId = Number(params.id)
    const atividade = await Atividade.findOrFail(atividadeId)
    console.log(atividade,'Atividade nao encontrada')

    atividade.merge(data)
    await atividade.save()
    return atividade
  }

  public async destroy({params,response}: HttpContextContract) {
      const atividadeId = Number(params.id)
      const atividade = await Atividade.findOrFail(atividadeId)

       await atividade.delete()

        return response.status(200).json({message: 'Atividade deletada com sucesso'})
  }
}
