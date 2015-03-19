setwd('~/Dropbox/code/sj-st-rubric/round3/')
library('ggplot2')
library('reshape2')

df <- read.csv('responses_with_tags.csv', as.is=TRUE)

# munge
answer_vecs <- grep('v[0-9]', names(df))
reformat_answers <- function(v) {
  v <- gsub('No', '0', v)
  v <- gsub('Yes', '2', v)
  v <- gsub('Clearly', '2', v)
  v <- gsub('Somewhat', '1', v)
  return(as.numeric(v))
}

df[,answer_vecs] <- apply(df[,answer_vecs], 2, reformat_answers)
df$score <- rowSums(df[,answer_vecs])


# percentage which each coder highligted text, on average
df$highlight_per <- rowSums(df[,grep("per_", names(df))])

# percentage of article highlighted per coder
tapply(df$highlight_per, df$coder, mean)

# top articles
paste(df$headline[df$coder=='Keith'][1:5], df$score[df$coder=='Keith'][1:5], sep=' - ')
paste(df$headline[df$coder=='David Bornstein'][1:5], df$score[df$coder=='David Bornstein'][1:5], sep=' - ')

# scorer analysis
ggplot(df, aes(y=headline, x=score, color=coder)) + 
  geom_point(size=20, shape="*", position=position_jitter(height=0, width=0.75)) + 
  labs(title="Inter-coder reliability")

# solution by score by headline
ggplot(df, aes(x=min_pos_solution, y=score, size=per_solution, color=coder)) +
  geom_point(alpha=0.8) +
  scale_size_continuous(range = c(3, 10)) + 
  xlim(0, 100) + 
  labs(title="Position of First Solution Tag vs. Score and Percentage of Solution Tags in Text") + 
  xlab("Position of First Solution Tag") + 
  ylab("Score")

# correlation matrix of variables with score
cor_data <- data.frame(score=df$score, df[, answer_vecs])
melt_cor_data <- melt(cor(cor_data))
names(melt_cor_data) <- c("Var1", "Var2", "Correlation")

qplot(x=Var1, y=Var2, data=melt_cor_data, fill=Correlation, geom="tile") + 
  labs(title="Correlation Matrix of Rubric Parameters") + 
  xlab(' ') +
  ylab(' ')

# simple score.
df$simple_score <- rowSums(df[, answer_vecs[c(2,5,8)]])
k <- df[df$coder=='Keith', ]
d <- df[df$coder=='David Bornstein', ]
k <- k[order(k$url),]
d <- d[order(d$url),]
cor(k$score, d$score)
cor(k$simple_score, d$simple_score)
