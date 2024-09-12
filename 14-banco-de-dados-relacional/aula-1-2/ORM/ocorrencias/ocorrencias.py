import sqlalchemy as sa

engine = sa.create_engine("sqlite:///C:\\git-daraperini\\learning\\pós-graduacao-full-stack\postdegree-fullstack-development-pucrs\\14-banco-de-dados-relacional\\aula-1-2\\ORM\\BD\\ocorrencias.db")
# cria uma engine

import sqlalchemy.orm as orm

base = orm.declarative_base() 
# possibilita criação de classes, é a base da estrutura

# Criando tabela delegacia - criar todas as tabelas que possuam PKs antes das tabelas com FKs
class delegacia(base):
    __tablename__ = "delegacia"

    codDP = sa.Column(sa.INTEGER, primary_key = True, index = True)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    endereco = sa.Column(sa.VARCHAR(255), nullable = False)

# Criando tabela delegado
class delegado(base):
    __tablename__ = "delegado"

    codDP = sa.Column(sa.INTEGER, primary_key = True, index = True)
    delegado = sa.Column(sa.VARCHAR(100), nullable = False)

# Criando tabela municipio
class municipio(base):
    __tablename__ = "municipio"

    codIBGE = sa.Column(sa.INTEGER, primary_key = True, index = True)
    municipio = sa.Column(sa.VARCHAR(100), nullable = False)
    regiao = sa.Column(sa.VARCHAR(25), nullable = False)

# Criando tabela ocorrencia
class ocorrencia(base):
    __tablename__ = "ocorrencia"

    idRegistro = sa.Column(sa.INTEGER, primary_key = True, index = True)
    codDP = sa.Column(sa.INTEGER, sa.ForeignKey("delegacia.codDP", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
    codIBGE = sa.Column(sa.INTEGER, sa.ForeignKey("municipio.codIBGE", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
    ano = sa.Column(sa.CHAR(4), nullable = False)
    mes = sa.Column(sa.CHAR(2), nullable = False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable = False)
    qtde = sa.Column(sa.INTEGER, nullable = False)

# criar as tabelas
try:
    base.metadata.create_all(engine) 
    print("Tabelas criadas")
except ValueError:
    ValueError()