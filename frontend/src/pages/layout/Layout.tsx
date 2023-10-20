import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import Azure from "../../assets/openai.svg";
import { CopyRegular, ShareRegular } from "@fluentui/react-icons";
import { Dialog, DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, DocumentCardType, Stack, TextField } from "@fluentui/react";
import { useEffect, useState } from "react";

const Layout = () => {
    const [isSharePanelOpen, setIsSharePanelOpen] = useState<boolean>(false);
    const [copyClicked, setCopyClicked] = useState<boolean>(false);
    const [copyText, setCopyText] = useState<string>("Copy URL");

    const handleShareClick = () => {
        setIsSharePanelOpen(true);
    };

    const handleSharePanelDismiss = () => {
        setIsSharePanelOpen(false);
        setCopyClicked(false);
        setCopyText("Copy URL");
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopyClicked(true);
    };

    useEffect(() => {
        if (copyClicked) {
            setCopyText("Copied URL");
        }
    }, [copyClicked]);

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Stack horizontal verticalAlign="center">
                        <img
                            src={Azure}
                            className={styles.headerIcon}
                            aria-hidden="true"
                        />
                        <Link to="/" className={styles.headerTitleContainer}>
                            <h1 className={styles.headerTitle}>PHOENIX GPT</h1>
                        </Link>
                        <div className={styles.shareButtonContainer} role="button" tabIndex={0} aria-label="Share" onClick={handleShareClick} onKeyDown={e => e.key === "Enter" || e.key === " " ? handleShareClick() : null}>
                            {/* <ShareRegular className={styles.shareButton} /> */}
                            <span className={styles.shareButtonText}>Help</span>
                        </div>
                    </Stack>
                </div>
            </header>
            <Outlet />
            <Dialog 
                onDismiss={handleSharePanelDismiss}
                hidden={!isSharePanelOpen}
                styles={{
                    
                    main: [{
                        selectors: {
                          ['@media (min-width: 480px)']: {
                            maxWidth: '600px',
                            background: "#FFFFFF",
                            boxShadow: "0px 14px 28.8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "8px",
                            maxHeight: '500px',
                            minHeight: '100px',
                          }
                        }
                      }]
                }}
                dialogContentProps={{
                    title: "How to use Generative AI?",
                    showCloseButton: true
                }}
            >
                <Stack verticalAlign="center" style={{gap: "8px"}}>
                    <DocumentCard 
                        aria-label="Document Card with a link to a learning resource about this app." 
                        type={DocumentCardType.compact}
                        onClickHref="https://open.spotify.com/episode/5UIZJ4dzlZwkhd4NyxweTU?go=1&sp_cid=c8703dcda27955c763366c6811f46583&utm_source=embed_player_p&utm_medium=desktop&nd=1"    
                    >
                        <DocumentCardPreview
                            previewImages={[{previewImageSrc: "https://i.scdn.co/image/5423c6961aca63f9c9ef42f9c51def01a61c7512"}]}
                        />
                        <DocumentCardDetails>
                            <DocumentCardTitle title="Podcast: What does ChatGPT really know?" shouldTruncate />
                            <DocumentCardActivity activity="https://open.spotify.com/episode/5UIZJ4dzlZwkhd4NyxweTU?go=1&sp_cid=c8703dcda27955c763366c6811f46583&utm_source=embed_player_p&utm_medium=desktop&nd=1" people={[{name:"Many Minds", profileImageSrc:""}]}/>
                        </DocumentCardDetails>
                    </DocumentCard>
                    <DocumentCard 
                        aria-label="Document Card with a link to a learning resource about this app." 
                        type={DocumentCardType.compact}
                        onClickHref="https://youtu.be/1IHBIijdxY8?si=kWWauKd4Ruc-WM_W"    
                    >
                        <DocumentCardPreview
                            previewImages={[{previewImageSrc: "https://img.youtube.com/vi/1IHBIijdxY8/0.jpg"}]}
                        />
                        <DocumentCardDetails>
                            <DocumentCardTitle title="A Non-Techie’s 10-Minute Guide to Using GenAI" shouldTruncate />
                            <DocumentCardActivity activity="https://youtu.be/1IHBIijdxY8?si=kWWauKd4Ruc-WM_W" people={[{name:"Harvard Business Review", profileImageSrc:"https://yt3.googleusercontent.com/ytc/AOPolaRYu_qVQuCDlqr3rtgcojMBfFMrtcRz5m3exjl-NQ=s176-c-k-c0x00ffffff-no-rj"}]}/>
                        </DocumentCardDetails>
                    </DocumentCard>
                    <DocumentCard 
                        aria-label="Document Card with a link to a learning resource about this app." 
                        type={DocumentCardType.compact}
                        onClickHref="https://www.promptingguide.ai/"    
                    >
                        <DocumentCardPreview
                            previewImages={[{previewImageSrc: "https://avatars.githubusercontent.com/u/30384625?s=200&v=4"}]}
                        />
                        <DocumentCardDetails>
                            <DocumentCardTitle title="Prompt Engineering Guide" shouldTruncate />
                            <DocumentCardActivity activity="https://www.promptingguide.ai/" people={[{name:"DAIR.AI", profileImageSrc:""}]}/>
                        </DocumentCardDetails>
                    </DocumentCard>
                    {/*<TextField className={styles.urlTextBox} defaultValue={window.location.href} readOnly/>
                     <div 
                        className={styles.copyButtonContainer} 
                        role="button" 
                        tabIndex={0} 
                        aria-label="Copy" 
                        onClick={handleCopyClick}
                        onKeyDown={e => e.key === "Enter" || e.key === " " ? handleCopyClick() : null}
                    >
                        <CopyRegular className={styles.copyButton} />
                        <span className={styles.copyButtonText}>{copyText}</span>
                    </div> */}
                </Stack>
            </Dialog>
        </div>
    );
};

export default Layout;
