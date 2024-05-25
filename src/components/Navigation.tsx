'use client'
import React from 'react'
import {Button, Drawer, Space, FloatButton} from 'antd'
import BurgerIcon from '@/img/icons/menu.svg'
import {CommentOutlined, InstagramOutlined,LinkedinFilled} from '@ant-design/icons'



export default function Navigation()
{
    const [open, setOpen] = React.useState(false);
    const [Floatopen, setFloatOpen] = React.useState(false);
    const [childrenDrawer, setChildrenDrawer] = React.useState(false);
    const onChange = () => {
        setFloatOpen(!Floatopen);
      };
    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const showChildrenDrawer = () => {
        setChildrenDrawer(true);
      };
      const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
      };
    return(
        <div  className=''>
      <div className='flex w-[100dvw] justify-end dark:bg-black bg-white text-black dark:text-white'>
        
       <div onClick={showDrawer} className=' links-menu text-black dark:text-white pt-2 px-2 hover:[transform:scale(1.05);]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
      </div>
      <div>
      <Drawer title="Arsalan's Portfolio" width={520} closable={false} onClose={onClose} open={open} 
      extra={
       
        <Button  onClick={onClose} className='border-round'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </Button>
                 
      }
      >

        <div className='links-menu text-black'>
            Home
        </div>

        <div className='links-menu text-black' onClick={showChildrenDrawer}>
            Projects
        </div>

        <div className='links-menu text-black' >
            About
        </div>

        <div className='links-menu text-black' >
            Contact Me
        </div>

      
        
        <Drawer

          title="Projects"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          extra={
            <Space>
              <Button onClick={onChildrenDrawerClose} className='border-round'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></Button>
            </Space>
          }
        >
          <div className='text-black'>ERA Solutions</div>
        </Drawer>
      </Drawer>
      </div>




      <>
      <FloatButton.Group
        open={Floatopen}
        onClick={onChange}
        trigger="click"
        shape='square'
        
        badge={{
          count: "Socials",
          color: "black"
        }}
        style={{
          right: 24,
          color: "blue"
        }}
        icon={<CommentOutlined />}
      >
        <FloatButton
         icon={<InstagramOutlined />}
        />
        <FloatButton 
            icon={<LinkedinFilled />}
        />
      </FloatButton.Group>
     
    </>


        </div>
    )
}