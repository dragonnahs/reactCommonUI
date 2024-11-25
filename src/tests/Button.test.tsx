/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-11-25 16:38:59
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-11-25 17:46:59
 * @FilePath: \react-common-ui\src\tests\Button.test.tsx
 * @Description: Button component test file
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../components/Button'
import React from 'react'
import userEvent from '@testing-library/user-event'


describe('Button Component', () => {
    it('renders button with children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })
    it('renders button with variant correctly', () => {
        render(<Button variant='primary'>Click me</Button>)
        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: 'var(--primary-color)' ,
        })
    })
    it('renders secondary button', () => {
        render(<Button variant='secondary'>Click me</Button>)
        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: 'var(--secondary-color)' ,
        })
    })
    it('renders tertiary button', () => {
        render(<Button variant='tertiary'>Click me</Button>)
        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: 'var(--tertiary-color)' ,
        })
    })
    it('calls onClick handler when clicked',async () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick}>Click me</Button>)
        await userEvent.click(screen.getByText('Click me'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })
    it('renders button with disabled attribute', () => {
        render(<Button disabled>Disabled</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
    })
})