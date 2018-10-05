const { getUserId } = require('../utils')

async function users(parent, args, ctx, info) {

  const allUsers = await ctx.db.query.users({})
  const count = allUsers.length

  return {
    users: allUsers,
    count
  }
}

module.exports = {
  users
}
