
import styled from "styled-components";
export const StyledModal= styled.div`

    ${({ theme }) => {

        const { colors, breakpoints } = theme;
        return `
        
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100;
        
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;

                    background-color: transparent;
                    transition: all 300ms ease;
                    transition-delay: 300ms;

                }
                
                .modal{
                    &__box {
                        background: ${colors['bg-color']};
                        display: inline-flex;
                        position: absolute;
                        border-radius: 12px;
                        z-index: 1;
                        max-width: 570px;
                        width: 100%;
                        min-height: 100px;
            
                        transform: translate(-50%, -50%);
                        top: 0;
                        left: 50%;
            
                        opacity: 0;
                        transition: all 600ms ease;
                    }
                    &__cont {
                        width: 100%;
                        padding: 16px;
                    }
                }
                
                &.active {
                    &:before {
                        background-color: white;
                        transition: all 300ms ease;
                    }
        
                    .modal {
                        &__box {
                            top: 50%;
                            opacity: 1;
                            transition: all 800ms ease;
                        }
                    }

                }
        
                .modal{
                    &__button-close-outer {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                        background-color: transparent;
                        border: none;
                        pointer-events: none;
                    }
                }
        
                //Modal custom styles
        
                .modal{
                    &__cont {
                        padding: 28px 16px 22px 16px;
                        @media only screen and (min-width: ${breakpoints['screen-md']}) {
                            padding: 28px 0 32px 0;
                        }
                    }
                }
        
                @media only screen and (min-width: ${breakpoints['screen-md']}) {
                    &:before {
                        background-color: rgba(8, 31, 65, 0);
                        transition: all 100ms ease;
                        transition-delay: 0ms;
                    }
                }

                &.active {
                    @media only screen and (min-width: ${breakpoints['screen-md']}) {
                        &:before {
                            background-color: ${colors['color-modal-overlay']};
                            opacity: 1;
                            transition: all 300ms ease;
                        }
                    }
                    .modal {
                        &__box {
                            @media only screen and (max-width: 991px) {
                                top: 0;
                                left: 50%;
                                transform: translate(-50%, 0);
                                transition: all 800ms ease;
                            }
                        }
                    }
        
                    .modal {
                        &__close-button {
                            > span{
                                width: 40px;
                                height: 40px;
                                opacity: 1;
                                transition: all 500ms ease;
                                transition-delay: 500ms;
                            }
                        }
                    }
        
                }
        
                .modal{
                    &__button-close-outer {
                        @media only screen and (min-width: ${breakpoints['screen-md']}) {
                            pointer-events: initial;
                        }
                    }
                }
        
                .modal{
                    &__close-button {
                        position: absolute;
                        
                        border-radius: 100%;
                        display: inline-flex;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        color: ${colors['text-body']};
                        border: none;
                        width: 40px;
                        height: 40px;
                        overflow: hidden;
                        background: none;
                        font-size: 14px;
                        cursor: pointer;

                        top: 18px;
                        right: 20px;
                        z-index: 1;
            
                        &:hover{
                            > span{
                                &:before{
                                    opacity: 1;
                                    transition: all 300ms ease;
                                }
                            }
                        }
            
                        > span{
                            border-radius: 100%;
                            position: absolute;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 0;
                            height: 0;
                            opacity: 0;
            
                            transition: all 100ms ease;
                            transition-delay: 0ms;
            
                            &:before {
                                content: "x";
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: absolute;
                                z-index: -1;
                                width: 100%;
                                height: 100%;
                                background: ${colors['bg-color']};
                                opacity: 0.3;
                                transition: all 300ms ease;
                            }
                        }
                        
                        @media only screen and (min-width: ${breakpoints['screen-md']} ) {
                            top: -40px;
                            right: -60px;
                        }
            
                       
                    }
                }
        
                &.modal{
                    &--md{
                        &.modal {
                            &__cont {
                                width: 100%;
                                max-width: 656px;
                            }
                        }
                    }
                }
                
        

        `;
    }}

`;