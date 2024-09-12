import panda as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import ocorrencias as oc

engine = engine = sa.create_engine("sqlite:///C:\\git-daraperini\\learning\\pós-graduacao-full-stack\postdegree-fullstack-development-pucrs\\14-banco-de-dados-relacional\\aula-1-2\\ORM\\BD\\ocorrencias.db")
Sessao = orm.sessionmaker(bind=engine)
sessao = Sessao()

RankMunic = pd.DataFrame(sessao.query(
    oc.municipio.municipio.label("Município"),
    sa.func.sum(oc.ocorrencia.qtde).label("Total")
    ).join(
        oc.ocorrencia,
        oc.ocorrencia.codIBGE == oc.municipio.codIBGE
    ).where(
        oc.ocorrencia.ocorrencias == "roubo_veiculo"
    ).group_by(
        oc.municipio.municipio
    ).order_by(
        sa.func.sum(oc.ocorrencia.qtde).desc()
    ).all()
)

print(RankMunic)
