// Экземпляр sequelize
import { Sequelize } from 'sequelize'
// Подключение к БД
import Database from './service/database.service.js'
// Импортирование сущностей
import UsersEntities from './entities/users.entities.js'
import ChatsEntities from './entities/chats.entities.js'
import CatalogEntities from './entities/catalog.entities.js'
import RecordsTypeEntities from './entities/recordsType.entities.js'
import RecordsCatalogEntities from './entities/recordsCatalog.entities.js'

const database = Database.connect(Sequelize)
const userConnection = database.userConnection

// Определение сущностей
const Users = UsersEntities.define(userConnection)
const Chats = ChatsEntities.define(userConnection)
const Catalog = CatalogEntities.define(userConnection)
const RecordsType = RecordsTypeEntities.define(userConnection)
const RecordsCatalog = RecordsCatalogEntities.define(userConnection)

// Связи сущностей
RecordsCatalog.hasMany(Users, { foreignKeyConstraint: 'user_id' })
Users.belongsTo(RecordsCatalog)

RecordsCatalog.hasMany(Chats, { foreignKeyConstraint: 'chat_id' })
Chats.belongsTo(RecordsCatalog)

RecordsCatalog.hasMany(Catalog, { foreignKeyConstraint: 'catalog_id' })
Catalog.belongsTo(RecordsCatalog)

RecordsCatalog.hasMany(RecordsType, { foreignKeyConstraint: 'type_id' })
RecordsType.belongsTo(RecordsCatalog)

export default database
