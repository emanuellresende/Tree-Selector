import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import List from '../List/index'
import { Container } from './styles'



const Item = ({
    item,
    children,
    isChecked
}) => {
    const [collapsed, setCollapsed] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const collapsedIDs = JSON.parse(localStorage.getItem('active')) || []

        collapsedIDs.forEach(element => {
            if (element === item.id) {
                setCollapsed(true)
            }
        });

    }, [item])

    useEffect(() => {
        setChecked(isChecked)
    }, [isChecked])

    useEffect(() => {
        const checkedIDs = JSON.parse(localStorage.getItem('check')) || []
        checkedIDs.forEach(element => {
            if (element === item.id) {
                setChecked(true)
            }
        });

    }, [item])

    useEffect(() => {
        let expandeds = JSON.parse(localStorage.getItem('active')) || []
        if (collapsed) {
            localStorage.setItem('active', JSON.stringify([...expandeds, item.id]))
        } else {
            const items = expandeds.filter(id => id !== item.id)
            localStorage.setItem('active', JSON.stringify(items))
        }
    }, [collapsed, item])

    const toggleCollapse = () => setCollapsed((val) => !val)

    const toggleChecked = () => {
        const val = !checked
        const childIDS = children.map((c) => c.id)
        let checks = JSON.parse(localStorage.getItem('check')) || []

        if (val) {
            localStorage.setItem('check', JSON.stringify([...checks, item.id, ...childIDS]))
        } else {
            const items = [checks, childIDS].filter(id => id !== item.id)
            localStorage.setItem('check', JSON.stringify(items))
        }

        setChecked(val)
    }

    return (
        <Container>
            <div
                className={`items-nested ${collapsed && 'active'}`}
            >
                <div className="title">
                    <div onClick={toggleChecked}>
                        <input className="checkbox" type="checkbox" checked={checked} />
                        <span>{item.name}</span>
                    </div>

                    {children.length > 0 && (
                        <span className="icon" onClick={toggleCollapse}>
                            <FontAwesomeIcon
                                className={`${collapsed && 'collapsed'}`} icon={faChevronDown}
                            />
                        </span>
                    )}

                </div>

                <div className={`subitem ${collapsed ? 'collapsed-item' : ''}`}>
                    {collapsed && children?.length > 0 && (
                        <List data={children} checked={checked} />
                    )}
                </div>
            </div>
        </Container>
    )
}

export default Item