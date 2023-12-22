import Admin from '../../Schema/Admin/signup.js'
import { Problem, Success } from '../../Custom/Message.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * @route {POST} /api/register
 * @description Register a new admin
 * @access public
 */

export const registerAdmin = async (request, response, next) => {
  try {
    const encryptPassword = bcrypt.hashSync(request.body.password, 10)

    const newAdmin = new Admin({ ...request.body, password: encryptPassword })

    const admin = await Admin.findOne({ email: request.body.email })

    if (admin) return next(Problem(400, 'You are already an admin'))

    await newAdmin.save()

    const successResponse = new Success(200, 'You are now an admin')
    response.status(successResponse.status).json(successResponse)
  } catch (error) {
    console.log(error)
    return next(Problem(404, 'Internal server error'))
  }
}

export const loginAdmin = async (request, response, next) => {
  try {
    const admin = await Admin.findOne({ email: request.body.email })

    if (!admin)
      return next(
        Problem(400, 'You are not an admin or you are not have admin access'),
      )

    const checkPassword = bcrypt.compareSync(
      request.body.password,
      admin.password,
    )
 
    if (!checkPassword) return next(Problem(400, 'Password is incorrect!'))

    const token = jwt.sign({ admin: admin._id }, process.env.SECRET, {
      expiresIn: '2h',
    })

    response.cookie('Token', token, {
      httpOnly: true,
      maxAge: 120 * 120 * 1000,
    })

    const successResponse = new Success(200, 'Login Successfully')
    successResponse.token = token

    response.status(successResponse.status).json(successResponse)
  } catch (error) {
    console.log(error)
    return next(Problem(500, 'Internal server error'))
  }
}

export const logoutAdmin = async (request, response, next) => {
  response.cookie('Token', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  const successResponse = new Success(200, 'Logout Successfully')
  response.status(successResponse.status).json(successResponse.message)
}
