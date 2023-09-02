import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'
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

  public async show({}: HttpContextContract) {}
  public async edit({}: HttpContextContract) {}

  public async update({request,params}: HttpContextContract) {
    const data = request.only(["nome","descricao","data", "local", "tipo","livre" ])
    const atividadeId = Number(params.id)
    const Atividade = await Atividade.find(atividadeId)

    await Atividade
  }

  public async destroy({params,response}: HttpContextContract) {
    const atividadeId = Number(params.id)
    const Atividade = await Atividade.find(atividadeId)
      await Atividade.delete()

      return response.status(200).json({message: 'Atividade deletada com sucesso'})
  }
}
