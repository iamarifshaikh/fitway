import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../../Schema/User/signup.js'
import { Problem, Success } from '../../Custom/Message.js'

/**
 * @route {POST} /api/register
 * @description Register a new user
 * @access public
 */

export const register = async (request, response, next) => {
  try {
    const encryptPassword = bcrypt.hashSync(request.body.password, 10)
    const newUser = new User({ ...request.body, password: encryptPassword })

    const user = await User.findOne({ email: request.body.email })

    if (user) return next(Problem(400, 'User Already Registered'))

    await newUser.save()
    const successResponse = new Success(200, 'User Created successfully')
    response.status(successResponse.status).json(successResponse)
  } catch (error) {
    console.log(error)
    return next(Problem(404, 'Internal server error'))
  }
}

/**
 * @route {POST} /api/login
 * @description Login a existing user
 * @access public
 */

export const login = async (request, response, next) => {
  try {
    const user = await User.findOne({ email: request.body.email })

    if (!user) return next(Problem(400, 'User not found'))

    const isPasswordCorrect = bcrypt.compareSync(
      request.body.password,
      user.password,
    )

    if (!isPasswordCorrect) return next(Problem(400, 'Invalid Password'))

    // If the password is correct, generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: '2h',
    })

    // 2 hour in milliseconds
    response.cookie('Token', token, {
      httpOnly: true,
      maxAge: 120 * 120 * 1000,
      sameSite: 'None',
      secure: true,
    })

    const successResponse = new Success(200, 'Login successful')
    successResponse.token = token

    response.status(successResponse.status).json(successResponse)
  } catch (error) {
    console.log(error)
    return next(Problem(500, 'Internal server error'))
  }
}

/**
 * @route {POST} /api/logout
 * @description Logout  from the application
 * @access protected
 */

export const logout = async (request, response, next) => {
  response.cookie('Token', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  const successResponse = new Success(200, 'Logout successfully!')
  response.status(successResponse.status).json(successResponse.message)
}
