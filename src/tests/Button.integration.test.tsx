/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-11-25 17:47:36
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-11-25 17:52:58
 * @FilePath: \react-common-ui\src\tests\Button.integration.test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../components/Button'
import React from 'react'
import userEvent from '@testing-library/user-event'

describe('Button Integration Test', () => {
    it('works in a form submission flow', async () => {
        const onSubmit = jest.fn(e => e.preventDefault())
        render(<form onSubmit={onSubmit}><Button htmlType='submit'>Submit</Button></form>)
        await userEvent.click(screen.getByText('Submit'))
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    it('works with loading state', () => {
        render(<Button loading>Submit</Button>)
        expect(screen.getByRole('button')).toHaveClass('ant-btn-loading')
    })
})